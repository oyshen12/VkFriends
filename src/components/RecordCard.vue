<template>
  <v-card class="record__wrap pa-4">
    <div class="d-flex mb-2 align-center">
      <v-avatar>
        <img :src="currentUser.photo_max" />
      </v-avatar>
      <div class="d-flex flex-column mt-1 ml-2">
        <span> {{ currentUser.first_name }}</span>
        <span>{{ getDate(recordProp.date, false) }}</span>
      </div>
    </div>
    <div
      :class="{
        border: record.itPost,
      }"
    >
      <div v-if="record.itPost" class="d-flex ml-2 mb-2 align-center">
        <v-avatar>
          <img :src="getGroup.photo_50" />
        </v-avatar>
        <div class="d-flex flex-column mt-1 ml-2">
          <span>{{ getGroup.name }}</span>
          <span>{{ getDate(record.date) }}</span>
        </div>
      </div>
      <div class="ml-2" v-if="record.text">{{ record.text }}</div>
      <div v-if="!videoType" class="img__wrap">
        <v-img
          v-for="(item, index) in record.attachments"
          :key="index"
          :src="getPhotoUrl(item.photo)"
          class="imgElement ml-2 mt-2"
        ></v-img>
      </div>
      <div v-else class="record-video ml-2">
        <v-img :src="record.image"></v-img>
        <v-img class="video__play" src="@/assets/play.png"></v-img>
      </div>
    </div>
    <div
      v-for="song in record.songs"
      class="d-flex align-center mt-2 py-1 record-songs"
    >
      <v-icon large color="primary" class="ml-1"> mdi-play-circle </v-icon>
      <div class="ml-2">
        <span class="song-artist">{{ song.artist }}</span> - {{ song.title }}
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["recordProp", "groups", "profiles", "user"],
  data() {
    return {
      record: {},
      currentUser: {},
      videoType: false,
    };
  },
  computed: {
    getGroup() {
      let group = this.groups.find(
        (group) => Math.abs(group.id) === Math.abs(this.record.owner_id)
      );
      if (!group) {
        group = this.profiles.find(
          (profile) => Math.abs(profile.id) === Math.abs(this.record.owner_id)
        );
        if (!group.name) {
          group["name"] = `${group.first_name} ${group.last_name}`;
        }
        if (!group.photo_50) {
          group["photo_50"] = "https://vk.com/images/camera_200.png";
        }
      }
      return group;
    },
  },
  methods: {
    filter(array, type) {
      return array?.length ? array.filter((el) => el.type === type) : [];
    },
    setCorrectRecord() {
      let newRecord = this.recordProp;
      if (this.recordProp?.copy_history) {
        newRecord = {
          ...this.recordProp,
          ...this.recordProp.copy_history[0],
          itPost: true,
        };
      }
      const { attachments } = newRecord;
      const videos = this.filter(attachments, "video");
      if (videos?.length === 1 && attachments?.length === 1) {
        this.videoType = true;
        const images = attachments[0].video.image;
        newRecord.image = images[images.length - 1].url;
        this.record = newRecord;
      }

      newRecord.songs = this.filter(attachments, "audio").map((el) => el.audio);
      if (this.videoType) {
        return;
      }
      newRecord.attachments = this.filter(attachments, "photo");
      this.record = newRecord;
    },
    setCurrentUser() {
      if (this.recordProp.owner_id !== this.recordProp.from_id) {
        const currentUser = this.profiles.find(
          (el) => el.id === this.recordProp.from_id
        );
        currentUser["photo_max"] =
          currentUser.photo_max ||
          currentUser.photo_50 ||
          currentUser.photo_100 ||
          "https://vk.com/images/camera_200.png";
        this.currentUser = currentUser;
      } else {
        this.currentUser = this.user;
      }
    },
    getPhotoUrl(photo) {
      return photo.sizes[photo.sizes.length - 1].url;
    },
    getDate(time, minutesShow = true) {
      const date = new Date(time * 1000);
      let correctDate = `${date.getDate()} ${this.getMonth(
        date.getMonth()
      )} ${date.getFullYear()}`;
      return minutesShow
        ? correctDate + ` в ${date.getHours()}:${date.getMinutes()}`
        : correctDate;
    },
    getMonth(monthId) {
      switch (monthId) {
        case 0:
          return "янв";
        case 1:
          return "фев";
        case 2:
          return "мар";
        case 3:
          return "апр";
        case 4:
          return "май";
        case 5:
          return "июн";
        case 6:
          return "июл";
        case 7:
          return "авг";
        case 8:
          return "сен";
        case 9:
          return "окт";
        case 10:
          return "ноя";
        case 11:
          return "дек";
      }
    },
  },
  mounted() {
    this.setCurrentUser();
    this.setCorrectRecord();
  },
};
</script>

<style scoped>
.record__wrap {
  display: flex;
  flex-direction: column;
  max-width: 540px !important;
}
.img__wrap {
  display: flex;
  flex-wrap: wrap;
}
.imgElement {
  width: 100px;
}
.border {
  border-left: 3px solid grey;
}
.record-songs {
  border-radius: 15px;
  cursor: pointer;
  border-bottom-left-radius: 15px !important;
  border-bottom-right-radius: 15px !important;
}
.record-songs:hover {
  background-color: rgba(128, 128, 128, 0.2);
}
.song-artist {
  font-weight: bold;
  color: #1976d2;
}
.record-video {
  position: relative;
}
.video__play {
  position: absolute;
  top: 50%;
  left: 45%;
  width: 50px !important;
  height: 50px !important;
}
@media (max-width: 1050px) {
  .record__wrap {
    max-width: 380px !important;
  }
}
</style>