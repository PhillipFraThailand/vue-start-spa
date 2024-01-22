<!-- 
  This component, defines a prop 'pageCreated' that it can get passed.
  This prop, is used in the @click event handler where it's passed the pageTitle data variable.
  So, whatever is passed from a parent, to this component under the pageCreated prop, will get called with the argument pageTitle.
  In order to update the pageTitle defined in the data, we bind the value of the input, to the data variable pageTitle.
  If we didn't do that, the pageTitle would keep the value it was initialized with, and not update.
-->

<template>
  <div class="container mb-3">
    <form action="">
      <div class="mb-3">
        <label for="" class="form-label">
          Page Title
        </label>
        <!-- 
          Bind our data variable 'pageTitle' to the input value with 2-way binding (v-model).
          We do this, to be able to pass the value from the input, to our pageCreated method passed from the parent App.vue.
          Note that the alternative to v-model is to use :value and @input (:value="pageTitle" @input="(e) => pageTitle = e.target.value").
        -->
        <input id="" type="text" class="form-control" v-model="pageTitle">
      </div>
      <div class="mb-3">
        <label for="" class="form-label">
          Content
        </label>
        <textarea type="text" class="form-control" rows="5" v-model="content"></textarea>
      </div>
      <div class="mb-3">
        <button class="btn btn-primary" @click.prevent="pageCreated({ pageTitle, content })">Create Page</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['pageCreated'],
  data() {
    return {
      pageTitle: '',
      content: '',
    }
  }
}
</script>