// Define the HeaderBox component with props destructured from HeaderBoxProps
const HeaderBox = ({ type = "title", title, subtext, user}: HeaderBoxProps ) => {
  return (
    <div className="header-box"> 
     {/* 
        Main title element.
        - Displays 'title' prop
        - Conditionally displays 'user' prop within a span if 'type' is 'greeting'
      */}
    <h1 className="header-box-title">
      {title}
      {type === 'greeting' && (
        <span className="text-bankGradient">
          &nbsp;{user}
          </span>
      )}
    
    </h1>
    {/* Paragraph element displaying the 'subtext' prop */}
    <p className="header-box-subtext">{subtext}</p>
    </div>
  )
}

export default HeaderBox
