import { updater } from "../PrincipalAccount/StudentsList/StudentsList";

const EditableListHead = ({ editableListHead, listItems, setListItems }) => {
    return (
        <tr>
            {editableListHead.map((heading, index) => {
                //console.log(heading, index);
                return (
                    <th
                        style={{ cursor: "pointer", userSelect: "none" }}
                        key={index}
                        scope='col'
                        className='py-3 px-6'
                        onClick={() =>
                            determineCompare(heading, listItems, setListItems)
                        }
                    >
                        {heading}
                    </th>
                );
            })}
        </tr>
    );
};

export default EditableListHead;

let clickNum = 0;

const determineCompare = (heading, listItems, setListItems) => {
    if (!listItems?.length > 0) {
        return;
    }
    switch (heading) {
        case "Имя":
            if (listItems[0]?.hasOwnProperty("name")) {
                setListItems(listItems.sort((a, b) => sortFunc(a, b, "name")));
                clickNum++;
                updater();
            }
            break;
        case "Класс":
            if (listItems[0]?.hasOwnProperty("grade")) {
                setListItems(
                    listItems.sort((a, b) =>
                        sortFunc(a.grade, b.grade, "letter")
                    )
                );
                clickNum++;
                updater();
            }
            break;
        case "Дата рождения":
            if (listItems[0]?.hasOwnProperty("birthdayDate")) {
                setListItems(
                    listItems.sort((a, b) => sortFunc(a, b, "birthdayDate"))
                );
                clickNum++;
                updater();
            }
            break;

        case "Средний балл":
            if (listItems[0]?.hasOwnProperty("averageMark")) {
                setListItems(
                    listItems.sort((a, b) => sortFunc(a, b, "averageMark"))
                );
                clickNum++;
                updater();
            }
            break;

        default:
            return;
    }
};

const sortFunc = (a, b, property) => {
    return clickNum % 2 === 0
        ? a[property] > b[property]
            ? 1
            : b[property] > a[property]
            ? -1
            : 0
        : a[property] < b[property]
        ? 1
        : b[property] < a[property]
        ? -1
        : 0;
};
