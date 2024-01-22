<!-- 
  This component, defines a prop 'pageCreated' that it can get passed.
  This prop, is used in the @click event handler where it's passed the pageTitle data variable.
  So, whatever is passed from a parent, to this component under the pageCreated prop, will get called with the argument pageTitle.
  In order to update the pageTitle defined in the data, we bind the value of the input, to the data variable pageTitle.
  If we didn't do that, the pageTitle would keep the value it was initialized with, and not update.

  We do not use computed values, as they generally only read values, they simply transform already existing data into new data.
  In the case of forms, we need to update the data when the input field value changes so, update the value which doesn't work with read only.
  Also, if we were to update the data variable, we would also need to reflect that in the input, e.g with masks etc.
-->

<template>
    <div class="container mb-3">
        <form action="">
            <div class="row">
                <div class="col-md-8">
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Page Title
                        </label>
                        <input type="text" class="form-control" v-model="pageTitle">
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Content
                        </label>
                        <textarea type="text" class="form-control" rows="5" v-model="content"></textarea>
                    </div>
                </div>

                <div class="mb-3 col">
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Link Text
                        </label>
                        <input type="text" class="form-control" v-model="linkText">
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Link URL
                        </label>
                        <input type="text" class="form-control" v-model="linkUrl">
                    </div>
                    <div class="mb-3">
                        <input type="checkbox" class="form-check-input" v-model="published">
                        Publish to navbar
                    </div>
                </div>
            </div>


            <div class="mb-3">
                <button class="btn btn-primary" :disabled="isFormInvalid" @click.prevent="submitForm">Create Page</button>
            </div>
        </form>
    </div>
</template>

<script>


export default {
    props: ['pageCreated'],
    computed: {
        isFormInvalid() {
            return !this.pageTitle || !this.content || !this.linkText || !this.linkUrl;
        }
    },
    watch: {
        // keep the linkText in sync with the pageTitle
        pageTitle(newTitleValue, oldTitleValue) { // passed the new value in the first param and the old in the second.
            if (this.linkText === oldTitleValue) { // if pageTitle changes, and the linkText is the old value, 
                this.linkText = newTitleValue; // update the linkText to the new value.
            }
        }
    },
    data() {
        return {
            pageTitle: '',
            content: '',
            linkText: '',
            linkUrl: '',
            published: true,
        };
    },
    methods: {
        submitForm() {
            if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
                alert('Please fill out all fields');
                return;
            }
            this.pageCreated({
                pageTitle: this.pageTitle,
                content: this.content,
                link: {
                    text: this.linkText,
                    url: this.linkUrl,
                },
                published: this.published,
            })

            this.pageTitle = '',
                this.content = '',
                this.linkText = '',
                this.linkUrl = '',
                this.published = true
        },
    },
}
</script>