<script lang="jsx">
export default {
  name: "InputRadio",
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
      genders: [
        { title: "Мужской", gender: "male" },
        { title: "Женский", gender: "female" },
      ],
    };
  },

  render() {
    const { $style, title, name, value, genders } = this;

    const labelsJSX = genders.map(({ title, gender }) => {
      return (
        <label tabindex="0" class={$style.card__radio}>
          {title}
          <input
            class={$style["card__input-radio"]}
            type="radio"
            checked={value === gender ? "checked" : ""}
            name={name}
          />
          <span class={$style.card__checkmark}></span>
        </label>
      );
    });

    return (
      <span class={$style.card__field}>
        <span class={$style.card__title}>{title}</span>
        <span class={$style["card__label-container"]}>{labelsJSX}</span>
      </span>
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

.card__label-container {
  display: flex;
}

@media (max-width: 730px) {
  .card__label-container {
    flex-direction: column;
  }
}

.card__radio {
  display: block;
  position: relative;
  width: 150px;
  padding: 9px 40px 9px 40px;
  margin-right: var(--sub-input-mr);
  border: 1px solid var(--radio-border);
  border-radius: 8px;
  cursor: pointer;
  font-size: var(--main-fz);
  user-select: none;
}

.card__radio:last-child {
  margin-right: 0;
}

.card__radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.card__checkmark {
  position: absolute;
  top: 10px;
  left: 11px;
  height: 20px;
  width: 20px;
  border: 2px solid var(--radio-border);
  border-radius: 50%;
  background-color: var(--main-light);
}

.card__radio input:checked ~ .card__checkmark {
  border: none;
  background-color: var(--main-blue);
  transition: all 0.2s ease;
}

.card__checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.card__radio input:checked ~ .card__checkmark:after {
  display: block;
  transition: all 0.2s ease;
}

.card__radio .card__checkmark:after {
  top: 6px;
  left: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--main-grey);
}

.card__input-radio {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
</style>
