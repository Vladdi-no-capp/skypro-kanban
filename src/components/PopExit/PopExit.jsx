import {
  ExitPopup,
  ExitBlock,
  ExitContainer,
  ExitTitle,
  FormGroup,
  ConfirmButton,
  CancelButton,
} from "./PopExit.styled"
export default function PopExit() {
  return (
    <ExitPopup id="popExit">
  <ExitContainer>
    <ExitBlock>
      <ExitTitle>Выйти из аккаунта?</ExitTitle>

      <form id="formExit">
        <FormGroup>
          <ConfirmButton id="exitYes" type="button">
            Да, выйти
          </ConfirmButton>

          <CancelButton
            id="exitNo"
            type="button"
            onClick={() => {
              window.location.hash = "";
            }}
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
