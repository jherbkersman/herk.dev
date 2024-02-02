'use client';

import { InlineWidget } from "react-calendly";

export default function Calendly() {
  return (
    <section id="call">
      <div className="mt-28">
        <InlineWidget
          styles={{ height: "660px" }}
          url="https://calendly.com/herk-dev/30min"
          />
      </div>
    </section>
    )
}
