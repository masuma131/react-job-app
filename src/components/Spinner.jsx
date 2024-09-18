import ClipLoader from "react-spinner"

const Spinner = ({loading}) => {
const overide = {
  display: "block",
  margin: "100px auto"

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