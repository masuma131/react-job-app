import ClipLoader from "react-spinner"

// Spinner component to show a loading state
const Spinner = ({loading}) => {
const overide = {
  display: "block",
  margin: "100px auto" // Centering the spinner on the page

}

  return (
    <ClipLoader 
      color="#4338ca"
      loading={loading}
      ccsOveride={overide}
      size={150}
    />
  )
}

export default Spinner