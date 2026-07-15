"use client"

import { useState } from "react"

const FAQS = [
  {
    id: "toggle-1",
    question: "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?",
    answer: (
      <>
        <p>
          <span>კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:</span>
        </p>
        <div className="info-about-course">
          <p>
            <span className="level"> I ეტაპი - </span>
            <span>
              პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი
              სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე.
              კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული
              განცხადებების გადარჩევა.
            </span>
          </p>
          <p>
            <span className="level">II ეტაპი - </span>
            <span>
              შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი
              კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს,
              სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის
              შემდეგ ეტაპზე.
            </span>
          </p>
          <p>
            <span className="level"> III ეტაპი -</span>
            <span>
              {" "}
              მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე,
              სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა
              დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე,
              სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა
              შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და თვითსწავლის
              უნარს ამოწმებს.
            </span>
          </p>
          <p>
            <span className="level">IV ეტაპი -</span>
            <span>
              {" "}
              შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ
              კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში
              ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.
            </span>
          </p>
        </div>
        <p>
          * სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო
          კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია
          თუ არა კურსს დასწრების წინაპირობა.
        </p>
      </>
    ),
  },
  {
    id: "toggle-2",
    question: "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?",
    answer: (
      <p>
        TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს
        აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security
        და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია
        სწავლის გაგრძელება Advance დონეზე.
      </p>
    ),
  },
  {
    id: "toggle-3",
    question: "რა ღირს სწავლა პროგრამის ფარგლებში?",
    answer: (
      <p>
        პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი
        ბანკისა და USAID-ის მიერ.
      </p>
    ),
  },
]

export function TbcFaq() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="faq-section">
      <div className="container-faq">
        <div className="faq-title">
          <h2>ხშირად დასმული კითხვები</h2>
          <a href="#" className="view-all view">
            ყველა კითხვა
          </a>
        </div>

        <div className="faq-list">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div className="faq-item" key={faq.id}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                >
                  <h3>{faq.question}</h3>
                  <img
                    className={`question-arrow${isOpen ? " rotate-arrow" : ""}`}
                    src="/assets/images/common-images/downward-arrow.svg"
                    alt=""
                  />
                </button>
                <article className={`faq-answer${isOpen ? " open" : ""}`}>
                  {faq.answer}
                </article>
              </div>
            )
          })}
        </div>
        <a className="view-all view-all-responsive" href="#">
          ყველა კითხვა
        </a>
      </div>
    </section>
  )
}
