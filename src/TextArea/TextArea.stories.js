import React from "react"
import { storiesOf } from "@storybook/react"
import { Store, StateDecorator } from "@sambego/storybook-state"
import { withKnobs, text, number } from "@storybook/addon-knobs"

import TextArea from "./index"

const store = new Store({
  value: ""
})

storiesOf("Textarea", module)
  .addParameters({
    options: {
      showPanel: true,
      showNav: true,
      panelPosition: "bottom"
    },
    info: {
      inline: true,
      header: false
    }
  })
  .addDecorator(StateDecorator(store))
  .addDecorator(withKnobs)
  .addDecorator(storyFn => (
    <div style={{ margin: "50px auto" }}>{storyFn()}</div>
  ))
  .add("Default", () => {
    const ErrorKnob = text("Error", "")
    const LabelKnob = text("Label", "Enter text")
    const RowsKnob = number("Rows", 3)
    return (
      <TextArea
        label={LabelKnob}
        error={ErrorKnob}
        rows={RowsKnob}
        value={store.get("value")}
        onChange={ev => store.set({ value: ev.target.value })}
      />
    )
  })
  .add("With border", () => {
    const ErrorKnob = text("Error", "")
    const LabelKnob = text("Label", "Enter text")
    const RowsKnob = number("Rows", 3)
    return (
      <TextArea
        label={LabelKnob}
        withBorder
        error={ErrorKnob}
        rows={RowsKnob}
        value={store.get("value")}
        onChange={ev => store.set({ value: ev.target.value })}
      />
    )
  })
