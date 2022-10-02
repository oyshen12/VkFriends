<template>
  <div class="search__wrap d-flex flex-column">
    <div class="d-flex align-start">
      <v-text-field
        v-model="search"
        label="Поиск пользователей"
        clearable
        solo
        class="mr-4"
      ></v-text-field>
      <v-btn @click="searchUsers(100)" class="mt-3"
        >Поиск<v-icon right> mdi-magnify </v-icon></v-btn
      >
    </div>

    <v-list>
      <v-list-item-group
        v-model="selected"
        active-class="primary--text"
        multiple
      >
        <template v-for="(user, index) in searchedUsers">
          <v-list-item :key="user.title">
            <template v-slot:default="{ active }">
              <v-list-item-avatar>
                <v-img
                  :alt="`${user.first_name} avatar`"
                  :src="user.photo_max"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  v-text="user.first_name + ' ' + user.last_name"
                ></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon v-if="index in selected" color="primary"
                    >mdi-account-plus</v-icon
                  >
                  <v-icon v-else>mdi-account-plus-outline</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
    <v-btn
      v-if="searchedUsers.length % 100 === 0"
      @click="searchUsers(searchedUsers.length + 100)"
      color="primary"
      >Загрузить еще</v-btn
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      search: "",
      selected: [],
      searchedUsers: [],
    };
  },
  methods: {
    ...mapActions["vkAPI"],
    async searchUsers(count = 100) {
      if (!this.search) {
        this.search = "";
      }
      const resp = await this.$store.dispatch("vkAPI", {
        link: "users.search",
        option: {
          q: this.search,
          count,
          fields: "bdate, has_photo, city, photo_max",
        },
      });
      this.searchedUsers = resp.response.items;
      console.log("this.searchedUsers ", this.searchedUsers);
    },
  },

  mounted() {
    this.searchUsers();
  },
};
</script>

<style scoped>
.search__wrap {
  max-width: 460px;
  margin-left: auto;
}
</style>