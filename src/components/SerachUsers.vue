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
      <v-btn @click="searchUsers(userOutput)" class="mt-3"
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
          <v-list-item :key="user.id" @click="toggleUser(user, index)">
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
                  <v-icon v-if="selected.includes(index)" color="primary"
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
      v-if="searchedUsers.length && searchedUsers.length % userOutput === 0"
      @click="searchUsers(searchedUsers.length + userOutput)"
      color="primary"
      >Загрузить еще</v-btn
    >
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      search: "",
      selected: [],
      searchedUsers: [],
      userOutput: 10,
    };
  },
  computed: {
    ...mapState(["addedUsers"]),
  },
  methods: {
    ...mapActions(["vkAPI"]),
    ...mapMutations(["setAddedUsers", "addAddedUsers", "deleteAddedUser"]),
    async searchUsers(count = this.userOutput) {
      if (!this.search) {
        this.search = "";
      }
      const resp = await this.vkAPI({
        link: "users.search",
        option: {
          q: this.search,
          count,
          fields: "bdate, has_photo, city, photo_max",
        },
      });
      this.searchedUsers = resp.response.items;
    },
    toggleUser(user, index) {
      if (this.selected.includes(index)) {
        this.deleteAddedUser(user.id);
      } else {
        this.addAddedUsers(user);
      }
    },
  },
  watch: {},
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