import React, {useCallback} from 'react';
import {useMemo, useState} from 'react';


export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState(5);
    const [b, setB] = useState(3);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random();
            }
            resultA *= i;
        }
        return resultA;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }


    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS-SECRET')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpToReactMemoExample = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Di', 'Bi', 'Si', 'Ki', 'Ti']);

    const addUser = () => {
        const newUser = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUser);
    }

    let newArr = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add</button>
        {counter}
        <Users users={newArr}/>
    </>
}

export const LikeUseCallbackExample = () => {
    console.log('LikeUseCallbackExample');
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['Bright', 'It', 'Luci', 'Dark Tower', 'Ti']);

    const addBook = useCallback(() => {
            const newUser = [...books, 'Stiven King' + new Date().getTime()]
            setBooks(newUser);
        }, [books]
    )

    // const memoizedAddBook = useMemo(() => addBook, [books]);

    let newArr = useMemo(() => {
        return books.filter(u => u.toLowerCase())
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addBook}>Add</button>
        {counter}
        <Books books={newArr} addBook={addBook}/>
    </>
}

const BooksSecret = (props: { books: Array<string>, addBook: () => void }) => {
    console.log('BOOKS-SECRET')
    return <div>
        {props.books.map((u, i) => <div key={i}>{u}</div>)}
        <button onClick={props.addBook}>Add</button>
    </div>
}

const Books = React.memo(BooksSecret)



