const React = require('react');


class Edit extends React.Component {
    render() {
        return (
            <div>
                <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
                    Title: <input type='text' name='title' defaultValue={this.props.log.title}/><br/>
                    Entry: <input type='text' name='entry' defaultValue={this.props.log.entry}/><br/>
                    Ship Is Broken:
                        {this.props.log.shipIsBroken ? <input type='checkbox' name="shipIsBroken" defaultChecked /> : <input type='checkbox' name='shipIsBroken'/>}
                    
                    <input type='submit' value='Submit Changes' />
                </form>
            </div>

        )
    }
}

module.exports = Edit;