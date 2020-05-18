
<template>
  <draggable
    v-bind="dragOptions"
    tag="div"
    class="item-container"
    :list="list"
    :value="value"
    @input="emitter"
    :animation="200"
  >

    <div class="item-group" :key="el.id" v-for="el in realValue">
      <div class="item">

        {{ el.name }}
          <button type="button" @click="onRemoveButtonClicked(el.id)">削除+{{el.id}}</button>
      </div>

      <nested-test class="item-sub" :list="el.elements" />

    </div>
  </draggable>
</template>

<script>
/* eslint-disable */
import draggable from "vuedraggable";
import eventbus from '../eventbus';


export default {
  name: "nested-test",
  methods: {
    emitter(value) {
      this.$emit("input", value);
    },
    onRemoveButtonClicked(id){
      console.log("放出")
      eventbus.$emit("onRemoveButtonClicked",id);
    },
  },
  components: {
    draggable
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    },
    // this.value when input = v-model
    // this.list  when input != v-model
    realValue() {
      return this.value ? this.value : this.list;
    },


  },
  props: {
    value: {
      required: false,
      type: Array,
      default: null
    },
    list: {
      required: false,
      type: Array,
      default: null
    },
  }
};
</script>

<style scoped>
.item-container {
  max-width: 20rem;
  margin: 0;
}
.item {
  padding: 1rem;
  border: solid black 1px;
  background-color: #fefefe;
}
.item-sub {
  margin: 0 0 0 3rem;
}
</style>
