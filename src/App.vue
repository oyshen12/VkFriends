<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <span class="text-h4">VkFriends</span>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
