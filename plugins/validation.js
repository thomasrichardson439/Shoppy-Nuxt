import Vue from "vue";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { required, email, numeric, max, max_value, min, min_value, is, confirmed } from "vee-validate/dist/rules";
import { messages } from 'vee-validate/dist/locale/en.json';

extend("required", {
    ...required,
    message: messages.required
});

extend("is", {
    ...is,
    message: messages.is
});

extend("email", {
    ...email,
    message: messages.email
});

extend("numeric", {
    ...numeric,
    message: messages.numeric
});

extend("max", {
    ...max,
    message: messages.max
});

extend("max_value", {
    ...max_value,
    message: messages.max_value
});

extend("min", {
    ...min,
    message: messages.min
});

extend("min_value", {
    ...min_value,
    message: messages.min_value
});

extend("confirmed", {
    ...confirmed,
    message: messages.confirmed
});

Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);
