<template>
 <div class="UsersListItem mdl-list__item mdl-list__item--two-line">
    <div class="mdl-list__item-primary-content">
      <i class="material-icons mdl-list__item-icon">person</i> 
      <span>
      {{ user.name }} - <small>{{ user.email }}</small>
      </span>
      <span class="mdl-list__item-sub-title">
        {{ user.address.street }}
      </span>
    </div>
     <span class="mdl-list__item-secondary-content">
      <a 
        class="mdl-list__item-secondary-action" 
        @click="$emit('delete')"
      >
        <i class="material-icons">delete</i>
      </a>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>
