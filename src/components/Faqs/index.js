// Write your code here.
import FaqItem from './faqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="App-container">
      <div className="faqs-container">
        <h1 className="heading">FAQS</h1>
        <ul className="faqs-list">
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
