<script lang="jsx">
export default {
  name: "Container",

  render() {
    const { $style, $slots } = this;

    return <div class={$style.container}>{$slots.default}</div>;
  },
};
</script>

<style module>
.container {
  margin: 0 auto;
  width: 1372px;
}

@media (max-width: 1440px) {
  .container {
    width: 996px;
  }
}

@media (max-width: 1040px) {
  .container {
    width: 664px;
  }
}

@media (max-width: 730px) {
  .container {
    width: 333px;
  }
}
</style>
