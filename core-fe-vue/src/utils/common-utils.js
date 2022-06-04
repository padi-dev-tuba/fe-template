import * as numeral from 'numeral'
import dayjs from 'dayjs'

export const formatCost = cost => String(numeral(cost).format()).replaceAll(',', '.')

export const formatDatePost = date => dayjs(date).format('YYYY-MM-DD')

export const formatDateShow = date => dayjs(date).format('DD/MM/YYYY')

export const sortByName = arr => {
  if (arr.length) {
    return arr.sort((a, b) => {
      if (a.investorName !== b.investorName) {
        return a.investorName < b.investorName ? -1 : 1
      }
      return a.name < b.name ? -1 : 1
    })
  }
  return []
}

export const removeDiacritical = str => str.toLowerCase().normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[đĐ]/g, 'd')
  .replace(/^-+|-+$/g, '')
  
export default {
  formatCost,
  formatDatePost,
  formatDateShow,
  sortByName,
  convertB64toBlob,
}
