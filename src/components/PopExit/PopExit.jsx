import {
  ExitPopup,
  ExitBlock,
  ExitContainer,
  ExitTitle,
  FormGroup,
  ConfirmButton,
  CancelButton,
} from "./PopExit.styled"
export default function PopExit({ onConfirm = () => {}, onCancel = () => {} }) {
  return (
    <ExitPopup id="popExit">
  <ExitContainer>
    <ExitBlock>
      <ExitTitle>Выйти из аккаунта?</ExitTitle>

      <form id="formExit">
        <FormGroup>
          <ConfirmButton id="exitYes" type="button" onClick={onConfirm}>
            Да, выйти
          </ConfirmButton>

          <CancelButton
            id="exitNo"
            type="button"
            onClick={onCancel}
          >
            Нет, остаться
          </CancelButton>
        </FormGroup>
      </form>
    </ExitBlock>
  </ExitContainer>
</ExitPopup>
  );
}
