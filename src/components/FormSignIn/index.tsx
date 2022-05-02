import { useState } from 'react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { Email, ErrorOutline, Lock } from 'styled-icons/material-outlined'

import { FormError, FormLink, FormLoading, FormWrapper } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'
import { FieldErrors, signInValidate } from 'utils/validations'
import { useRouter } from 'next/router'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const { query } = useRouter()

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    setLoading(true)

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    return await signIn('credentials', {
      ...values,
      redirect: true,
      callbackUrl: `${window.location.origin}/${query?.callbackUrl || ''}`
    })
      .catch(() => {
        setFormError('Username or password is invalid')
      })
      .finally(() => setLoading(false))
  }

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        {!!formError && (
          <FormError>
            <ErrorOutline />
            {formError}
          </FormError>
        )}

        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError?.email}
          icon={<Email />}
          onInputChange={(v: string) => handleInput('email', v)}
        />

        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          icon={<Lock />}
          onInputChange={(v: string) => handleInput('password', v)}
        />

        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>

        <FormLink>
          Don&rsquo;t have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
