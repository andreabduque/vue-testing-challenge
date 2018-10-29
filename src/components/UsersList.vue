<template>
  <div class="UsersList mdl-list">
    <users-list-item
      v-for="user in users"
      :user="user"
      @delete="$emit('user-delete', user)"
    />
  </div>
</template>

<script>
import UsersListItem from "./UsersListItem";

export default {
  components: {
    UsersListItem
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  }
};
</script>
