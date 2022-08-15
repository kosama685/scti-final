<template>
    <div class="emplyee-add-modal-msg">
        <div class="modal fade" :id="el" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <i class="fas fa-question-circle fa-4x"></i>
                        <h4 v-html="title"></h4>
                        <span v-html="subtitle"></span><br>
                        <slot></slot>
                    </div>
                        <div class="modal-footer">
                    <slot name="footer">
                            <a href="javascript:void(0)" data-dismiss="modal" class="emplyee-add-btn">Close</a>
                    </slot>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        el: {
            type: String,
            default: 'successPopup',
        },
        title: {
            type: String, // String, Number, Boolean, Function, Object, Array
            required: true,
            default: null
        },
        subtitle: {
            type: String, // String, Number, Boolean, Function, Object, Array
            required: false,
            default: null
        }
    }
}

</script>
