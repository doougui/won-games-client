import React, { useState } from 'react'
import Link from 'next/link'
import {
  AccountCircle,
  Email,
  ErrorOutline,
  Lock
} from '@styled-icons/material-outlined'

import { useMutation } from '@apollo/client'
import { MUTATION_REGISTER } from 'graphql/mutation/register'

import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'

import Button from 'components/Button'
import TextField from 'components/TextField'

import { FormWrapper, FormLink, FormLoading, FormError } from 'components/Form'
import { signIn } from 'next-auth/react'
import { FieldErrors, signUpValidate } from 'utils/validations'

const FormSignUp = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) =>
      setFormError(
        err?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0]
          .message
      ),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          ...values,
          redirect: true,
          callbackUrl: '/'
        })
    }
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    setFormError('')

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          error={fieldError?.username}
          onInputChange={(v: string) => handleInput('username', v)}
          icon={<AccountCircle />}
        />

        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError?.email}
          onInputChange={(v: string) => handleInput('email', v)}
          icon={<Email />}
        />

        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v: string) => handleInput('password', v)}
          icon={<Lock />}
        />

        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(v: string) => handleInput('confirm_password', v)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign up now</span>}
        </Button>

        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
