<script lang="jsx">
export default {
  name: "Select",
  props: {
    title: {
      type: String,
      required: true,
      default: () => "",
    },
    name: {
      type: String,
      required: true,
      default: () => "",
    },
    value: {
      type: String,
      required: true,
      default: () => "",
    },
    isDisabled: {
      type: Boolean,
      default: () => false,
    },
  },

  data() {
    return {
      countries: ["Грузия", "США", "Российская Федерация", "Украина", "Беларусь", "Казахстан"],
    };
  },

  render() {
    const { $style, title, name, countries, value, isDisabled } = this;

    const optionsJSX = countries.map((item) => {
      return (
        <option value={item} selected={value === item}>
          {item}
        </option>
      );
    });

    return (
      <label class={$style.card__field}>
        <span class={$style.card__title}>{title}</span>
        <select
          class={[$style.card__select, $style["card__select--arrow"]]}
          name={name}
          disabled={isDisabled}
        >
          {optionsJSX}
        </select>
      </label>
    );
  },
};
</script>

<style module>
.card__field {
  display: flex;
  flex-direction: column;
  margin-right: var(--input-mr);
  margin-bottom: var(--input-mb);
  font-size: var(--main-fz);
  color: var(--text-light-grey);
}

.card__field:nth-child(3),
.card__field:nth-child(6),
.card__field:last-child {
  margin-right: 0;
}

@media (max-width: 1440px) {
  .card__field:nth-child(3),
  .card__field:nth-child(6),
  .card__field:last-child {
    margin-right: var(--input-mr);
  }
}

.card__title {
  margin-bottom: var(--title-mb);
  font-size: 13px;
}

.card__select {
  position: relative;
  width: 309px;
  padding: 14px 14px;
  border: none;
  border-radius: 8px;
  background: var(--main-grey);
  font-size: var(--main-fz);
  line-height: 16px;
  color: var(--text-color);
  transition: outline 0.2s ease;
  appearance: none;
}

.card__select--arrow {
  background: url("@/assets/images/arrow.svg") right 13px center no-repeat var(--main-grey);
  transition: background 0.2s ease;
}

.card__select--arrow:focus {
  background: url("@/assets/images/arrow-down.svg") right 13px center no-repeat var(--main-grey);
  transition: all 0.2s ease;
}

@media (max-width: 1440px) {
  .card__select {
    width: 100%;
  }
}

@media (max-width: 730px) {
  .card__select {
    width: 288px;
  }
}
</style>
