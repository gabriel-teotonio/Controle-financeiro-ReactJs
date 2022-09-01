import { ResumeItem } from '../resume-item';
import * as C from '../resume/style';

import { 
    TbArrowBigDownLines,
    TbArrowBigUpLines,
    TbReportMoney
} from 'react-icons/tb'

export const Resume = ({ income, expense, total }) => {
    return (
        <C.Conatainer>
            <ResumeItem  title="Entradas" Icon={TbArrowBigDownLines} value={income} />
            <ResumeItem title="Saídas" Icon={TbArrowBigUpLines} value={expense}/>
            <ResumeItem title="Total" Icon={TbReportMoney} value={total}/>
        </C.Conatainer>
    )
}