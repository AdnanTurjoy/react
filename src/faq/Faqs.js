import React, { useState } from "react";
import { faqsData } from "./Data";
import Faq from "./Faq";
function Faqs() {
  const [faqs, setFaqs] = useState(faqsData);
  return (
    <main>
      <section>
        <h1>FAQs</h1>
        {faqs.map((faq) => (
          <Faq key={faq.id} {...faq} />
        ))}
      </section>
    </main>
  );
}

export default Faqs;
