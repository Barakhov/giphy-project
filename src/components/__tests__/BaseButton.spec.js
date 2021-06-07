import { render, fireEvent } from '@testing-library/vue'
import BaseButton from '@/components/BaseButton.vue'

describe('BaseButton Component', () => {
  it('should render button', () => {
    render(BaseButton)
  })

  it('should have primary theme', () => {
    const { getByRole } = render(BaseButton, {
      props: {
        theme: 'primary',
      },
    })

    const button = getByRole('button')

    expect(button.classList).toContain('primary')
  })

  it('should emit a click event', async () => {
    const { getByRole, emitted } = render(BaseButton)

    const button = getByRole('button')
    await fireEvent.click(button)

    expect(emitted().click).toBeTruthy()
  })
})
