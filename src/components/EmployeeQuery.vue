<template>
  <div class="employee-query">
    <input type="text" v-model.trim="tempName" placeholder="姓名" />
    <select v-model.number="tempSelected">
      <option :value="0">部门</option>
      <option
        v-for="option in department"
        :value="option.departmentId"
        :key="option.departmentId"
      >
        {{ option.department }}
      </option>
    </select>
    <button @click="query">查询</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class EmpolyeeQuery extends Vue {
  @Prop({type: String, default: ''})
  name!: string

  @Prop({type: Number, default: 0 })
  selected!: number

  @Prop({type: Array, default: () => {}})
  department!: { department: string, departmentId: number }[]

  tempName: string = this.name
  tempSelected: number = this.selected

  query() {
    this.$emit('query', {
      name: this.tempName,
      departmentId: this.tempSelected
    })
  }

}
</script>

<style lang="css" scoped>
.employee-query {
  display: flex;
}
input, select {
  margin-right: 10px;
}
</style>