const React = require("react")



class Index extends React.Component {
  render() {
    const { logs } = this.props
    return (
      <div>
          <nav>
            <a href="/logs/new">Create a New Log</a>
          </nav>
          <ul>
            {
              logs.map((log, i) => {
                return (
                  <li key={i}>
                   
                    <a href={`/logs/${log._id}`}>
                      {log.title}
                    </a>
                    {' '}
                  
                    <br />
                    <a href={`/logs/${log._id}/edit`}>Edit this log</a>
                    {/* your delete form goes here*/}
                 
                    <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                        <input type='submit' value='DELETE' />
                    </form>
                  </li>

                )
              })
            }
          </ul>
      </div>
    )
  }
}

module.exports = Index