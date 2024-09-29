import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"

export function useSearchMovies() {
  const [searchParams, setSearchParams] = useSearchParams()
  const s = searchParams.get('s') as string

  
  const [fieldText, setFieldText] = useState<string>(s ?? '')
  const [errorField, setErrorField] = useState<string | null>(null)

  const isFirstInput = useRef<boolean>(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMovieName = e.currentTarget.value

      if (newMovieName === '') {
          setSearchParams({})
          setFieldText(newMovieName)
          return
      }

      setSearchParams({ s: newMovieName })
      setFieldText(newMovieName)
  }

  useEffect(() => {

      if (isFirstInput.current) {
          isFirstInput.current = fieldText === ''
          return
      }

      if (fieldText === '') {
          setErrorField('Please enter a movie name')
          return
      }

      setFieldText(fieldText)
      setErrorField(null)

  }, [fieldText])

  return {handleChange, fieldText, errorField}
}