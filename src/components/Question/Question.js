import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='container'>
            <div className='question'>
                <h1>How React Works ?</h1>
                <p>React utilizes a declarative model that makes reasoning about your application extremely easy. It aspires to be reliable as well as adaptable. It creates basic views for each state of your project. Whenever your data is updated, React will effectively modify and render just the appropriate component.</p>
            </div>
            <div className='question'>
                <h1>Difference Between Props and State ?</h1>
                <p>
                    <table>
                        <tr>
                            <th>Props</th>
                            <th>State</th>
                        </tr>
                        <tr>
                            <td>Data is passed from one component to another component.</td>
                            <td>Data is passed within the same component only.</td>
                        </tr>
                        <tr>
                            <td>It cannot be modified.</td>
                            <td>It can be modified.</td>
                        </tr>
                        <tr>
                            <td>Read only.</td>
                            <td>Both read and write.</td>
                        </tr>
                    </table>
                </p>
            </div>
        </div>
    );
};

export default Question;