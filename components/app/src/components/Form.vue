<template>
  <div id="form">
    <template v-if="error">
      <p>Error Form</p>
    </template>
    <form @submit.prevent="sendForm">
      <input v-model="$v.name.$model" type="text" />
      <!-- <p v-if="!$v.name.minLength">
        Nombre debe ser mayor a {{ $v.name.$params.minLength.min }}
      </p> -->
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Form",
  data() {
    return {
      name: "",
      error: false,
    };
  },

  validations: {
    name: {
      required,
      minLength: minLength(5),
    },
  },

  methods: {
    sendForm() {
      this.$v.$touch();
      this.error = this.$v.$invalid;

      if (!this.error) {
        alert("Valido!");
      }
    },
  },

  watch: {
    name(newValue, oldValue) {
      console.log("Old: " + oldValue);
      console.log("New: " + newValue);
    },
  },
};
</script>

<style>
#form {
  margin-top: 20px;
}
</style>
