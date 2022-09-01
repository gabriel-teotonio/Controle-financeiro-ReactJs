import * as C from './style'



export const ResumeItem = ({ title, Icon, value }) => {
    return (
        <C.Container>
            <C.Header>
                <p>{title}</p>
                <Icon />
            </C.Header>
                <C.Total>{value}</C.Total>
        </C.Container>
    )
}