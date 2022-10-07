<script lang="jsx">
export default {
  name: "InputText",
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
    placeholder: {
      type: String,
      required: true,
      default: () => "",
    },
    isDisabled: {
      type: Boolean,
      default: () => false,
    },
    isWide: {
      type: Boolean,
      default: () => false,
    },
  },

  render() {
    const { $style, title, name, value, placeholder, isDisabled, isWide } = this;

    let classes = [];
    if (isWide) {
      classes = classes.concat([$style.card__field, $style["card__field--wide"]]);
    } else {
      classes.push($style.card__field);
    }
    if (isDisabled) classes.push($style["card__field--disabled"]);

    return (
      <label class={classes}>
        <span class={$style.card__title}>{title}</span>
        <input
          type="text"
          class={$style.card__input}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
        />
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

.card__input {
  position: relative;
  min-width: 309px;
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: var(--main-grey);
  font-size: var(--main-fz);
  line-height: 16px;
  color: var(--text-color);
  transition: outline 0.2s ease;
  appearance: none;
}

.card__input:disabled {
  color: var(--input-disabled);
}

@media (max-width: 1440px) {
  .card__input {
    min-width: 100%;
  }
}

@media (max-width: 730px) {
  .card__input {
    min-width: 288px;
  }
}

.card__input--wide {
  min-width: 100%;
  padding-top: 14px;
}

@media (max-width: 730px) {
  .card__input--wide {
    min-width: 288px;
  }
}

.card__field--wide {
  width: 100%;
}

.card__field--disabled {
  color: var(--text-disabled);
}
</style>
