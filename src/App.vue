<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <span class="text-h4">VkFriends</span>
      <v-spacer></v-spacer>
      <v-btn v-if="authed" @click="logout" color="teal">Выйти</v-btn>
      <v-btn v-else @click="login" color="teal">Войти</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    ...mapState(["authed"]),
  },
  methods: {
    ...mapMutations(["setAuthed", "clearState"]),
    login() {
      VK.Auth.login((data) => {
        console.log("data ", data);
        if (data.status === "connected") {
          this.setAuthed(true);
        }
      });
    },
    logout() {
      VK.Auth.logout();
      this.setAuthed(false);
      this.clearState();
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
  },
  mounted() {
    if (document.cookie.includes("vk_app_51438811")) {
      this.setAuthed(true);
    }
  },
};
</script>
