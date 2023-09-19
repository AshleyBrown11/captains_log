const React =require('react')

class Show extends React.Component {
    render () {
        const {log} =this.props
        return (
            <div>
                <h1>Show Log Information</h1>
                <p>Title: {log.title}</p> 
                <p>Entry: {log.entry}</p> 
            {log.shipIsBroken ?
                      'The ship is broken'
                      :
                      'The ship is not broken'
                  }
                <a href={`/logs/${log._id}/edit`}>Edit Log</a>
                <a href="/logs">Back to Main</a>
                
            </div>
        )
    }
}

module.exports = Show