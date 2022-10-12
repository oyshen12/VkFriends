<template>
  <div class="friends__wrap">
    <div class="grid__wrap">
      <user-card
        v-for="(user, index) in usersFriends"
        :user="user"
        :index="index"
        :key="user.id"
        :friend="friendsOfFriends[index]"
        class="mt-6"
        @click.native="goToProfile(user)"
      ></user-card>
    </div>
  </div>
</template>


<script>
import UserCard from "@/components/UserCard.vue";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  components: {
    UserCard,
  },
  data() {
    return {
      interval: 0,
    };
  },
  computed: {
    ...mapState(["usersFriends", "counterFriends", "friendsOfFriends"]),
  },
  methods: {
    ...mapActions(["vkAPI"]),
    ...mapMutations(["setFriendsFriends", "setCounterFriends"]),
    goToProfile(user) {
      this.$router.push({ name: "user", params: { id: user.id } });
    },
    async searchFriends(user, i) {
      const { response } = await this.vkAPI({
        link: "friends.get",
        option: {
          user_id: user.id,
        },
      });
      const resp = response ? response.count : [];
      this.setFriendsFriends({
        id: this.usersFriends[i].id,
        index: i,
        count: resp.length !== 0 ? resp : "приватный аккаунт",
      });
    },
    getFriends() {
      if (this.counterFriends === this.usersFriends.length) {
        return;
      }
      this.interval = setInterval(async () => {
        const counter = this.counterFriends;
        for (let i = counter; i < counter + 4; i++) {
          this.setCounterFriends(i);
          if (i === this.usersFriends.length) {
            clearInterval(this.interval);
            return;
          }
          this.searchFriends(this.usersFriends[i], i);
        }
      }, 1500);
    },
  },
  mounted() {
    this.getFriends();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.friends__wrap {
  display: flex;
  justify-content: center;
}
.grid__wrap {
  display: grid;
  max-width: 1800px;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 0 64px;
}
@media (max-width: 1730px) {
  .grid__wrap {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
@media (max-width: 1450px) {
  .grid__wrap {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 1100px) {
  .grid__wrap {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 800px) {
  .grid__wrap {
    grid-template-columns: 1fr;
  }
}
</style>