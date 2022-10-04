<template>
  <v-card
    width="300"
    class="user__card"
    :class="{
      hover: hover,
    }"
    :style="{
      backgroundColor: `rgba(25, 118, 210, ${0.1 * user.mutualFriends})`,
    }"
  >
    <v-img height="250" :src="user.photo_max"></v-img>
    <v-card-title>{{ user.first_name }} {{ user.last_name }}</v-card-title>
    <v-card-text v-if="user.mutualFriends" class="pb-0"
      >Общих друзей: {{ user.mutualFriends }}</v-card-text
    >
    <v-card-text class="pt-0"
      >{{ user.sex === 1 ? "Девушка" : "Мужчина" }}, {{ getAge }}
      {{ ageFormat() }}</v-card-text
    >
  </v-card>
</template>

<script>
export default {
  props: {
    user: {
      require: true,
    },
    hover: {
      default: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    getAge() {
      if (this.user.bdate?.split(".").length === 3) {
        const dateString = this.user.bdate
          .replaceAll(".", "-")
          .split("-")
          .reverse()
          .join("-");
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      }
      return "возраст скрыт";
    },
  },
  methods: {
    ageFormat() {
      const age = this.getAge;
      if (age === "возраст скрыт") {
        return;
      }
      if (age < 5) {
        return age == 1 ? "год" : "года";
      }
      if (age < 21) {
        return "лет";
      }
      if (age % 10 === 1) {
        return "год";
      }
      if (age % 10 === 2 || age % 10 === 3 || age % 10 === 4) {
        return "года";
      }
      return "лет";
    },
  },
};
</script>

<style scoped>
.user__card {
  border: 2px solid transparent;
  border-radius: 4px;
  transition: all 0.5s ease-out;
}
.hover {
  cursor: pointer;
}
.hover:hover {
  border: 2px solid teal;
}
</style>