<template>
  <div class="alert" error dismissible  @input="onClose" :value="true"  >
  <span class="closebtn" onclick="this.parentElement.style.display='none';" >&times;</span> 
  <strong>Danger!</strong> {{text}} </div>
</template>

<script>
export default {
props: ['text'],
    methods: {
      onClose () {
        this.$emit('dismissed')
      }
    }
}
</script>
<style>
.alert {
  padding: 20px;
  background-color: #e42646;
  color: white;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>