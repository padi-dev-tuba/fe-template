/* eslint-disable new-cap */
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { DOMAIN } from '@/constants/constants'

class callHub {
  constructor() {
    const hubConnection = JSON.parse(localStorage.getItem('accessToken'))
    const option = {
      accessTokenFactory: () => hubConnection,
    }
    this.connection = hubConnection ? new HubConnectionBuilder()
      .withUrl(`${DOMAIN}/signalr`, option)
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build() : ''
    this.start()
  }

  start() {
    try {
      this.connection.start()
    } catch (err) {
      setTimeout(this.start, 5000)
    }
  }
}
export default new callHub()
