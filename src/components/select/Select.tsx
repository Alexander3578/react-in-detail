import React, {useState, KeyboardEvent, useEffect} from 'react';
import S from './Select.module.css'

type ItemType = {
    title: string
    value: any
    count?: number
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select =  React.memo(SelectSecret);

export function SelectSecret(props: SelectPropsType) {

    const [active, setActive] = useState(false);
    const [hoveredElem, setHoveredElem] = useState(props.value);

    useEffect (() => {
        setHoveredElem(props.value)
    }, [props.value])

    const toggleSelectItems = () => setActive(!active);

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleSelectItems();
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElem) {
                    const pretendentEl = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentEl) {
                        props.onChange(pretendentEl.value)
                        return;
                    }
                }
            }
            if (!selectedItem)
                props.onChange(props.items[0].value);
        }
        if (e.key === 'Escape' || e.key === 'Enter') {
            setActive(false);
        }
    }

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElem)

    return (
        <div className={S.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span onClick={toggleSelectItems}
                  className={S.select_main}>
                {selectedItem && selectedItem.title}
            </span>
            {
                active &&
                <div className={S.select_items}>
                    {
                        props.items.map(i =>
                            (
                                <div onMouseEnter={() => {
                                    setHoveredElem(i.value)
                                }}
                                     className={S.select_item + ' '
                                         + (hoveredItem === i ? S.selected : '')}
                                     key={i.value}
                                     onClick={() => onItemClick(i.value)}>
                                    {i.title}
                                </div>
                            )
                        )
                    }
                </div>
            }
        </div>
    );
};

