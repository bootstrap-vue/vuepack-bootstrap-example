<template>
  <div class="container">
      <b-alert :show="true" state="success" dismissible>
      This is an alert
	  </b-alert>
  </div>
</template>

<script>
import Counter from 'components/Counter'

export default {
  components: {
    Counter
  }
}
</script>
