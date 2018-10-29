<template>
  <div class="mdl-layout mdl-js-layout">
    <div class="mdl-layout__content">
     <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--middle">
            <button 
              class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
              @click="fetchUsers"
            >
              Fetch Users Once
            </button>
      </div>
     
     </div>
     <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <users-list :users="users" @user-delete="deleteUser"/>
      </div>
     </div>   
    </div>
  </div>
</template>

<script>
import UsersList from '@/components/UsersList'

export default {
  components: {
    UsersList
  },
  
  computed: {
    users() {
      return this.$store.getters.getUsers;
    }
  },

  methods: {
    fetchUsers() {
      this.$store.dispatch("fetchUsers", Date.now());
    },
    deleteUser(user) {
      this.$store.dispatch('deleteUser', user)
    }
  }
};
</script>
