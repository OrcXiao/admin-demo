const validate = {
  //不能为空..
  NotNull: (itemName, triggerType = 'blur') => {
    return [
      {
        required: true,
        trigger: triggerType,
        message: `${itemName}不能为空`,
      },
    ]
  }
}
export default validate
