<template>
  <div v-if="userExist" class="d-flex mt-8 justify-center">
    <user-card :user="user" :hover="false" class="current-user"></user-card>
    <div class="d-flex flex-column ml-16">
      <div class="text-h3">В друзьях у пользователей:</div>
      <div class="users__grid mt-4">
        <user-card
          v-for="user in addedFriends"
          :user="user"
          :key="user.id"
          :hover="false"
        ></user-card>
      </div>
      <span class="text-h3 mt-4">Записи на странице:</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import UserCard from "@/components/UserCard.vue";

export default {
  components: { UserCard },
  component: {
    UserCard,
  },
  data() {
    return {
      id: 0,
      user: {},
      records: [],
    };
  },
  computed: {
    ...mapState(["usersFriends", "addedUsers"]),
    userExist() {
      return this.user && Object.keys(this.user).length;
    },
    addedFriends() {
      return this.addedUsers.filter((el) => el.friends.includes(this.id));
    },
  },
  methods: {
    ...mapActions(["vkAPI"]),
    async getRecords() {
      const { response } = await this.vkAPI({
        link: "wall.get",
        option: {
          owner_id: this.id,
        },
      });
      console.log("response ", response);
    },
  },

  async mounted() {
    this.id = this.$route.params.id;
    await this.getRecords();
    this.user = this.usersFriends.find((el) => el.id === this.id);
    if (!this.userExist) {
      const { response } = await this.vkAPI({
        link: "users.get",
        option: {
          user_ids: this.id,
          fields: "photo_max, bdate, sex",
        },
      });
      this.user = response[0];
    }
  },
};
</script>

<style scoped>
.users__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}
.current-user {
  height: 422px;
}
</style>