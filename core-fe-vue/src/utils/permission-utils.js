/**
 * Check the user has permission to access the control button, ... with permissionPolicy and permissionRole
 *
 * @param permissions = [{CapNhat: true, Permission: "QuanLyVaiTro", PermissionId: 12, Ten: "Quản lý vai trò", Xem: true}, {}]
 * @param permissionPolicy = "QuanLyVaiTro"
 * @param permissionRole CapNhat|Xem
 * @returns {*|boolean}
 */
// eslint-disable-next-line import/prefer-default-export
export const hasPermission = (
  permissions,
  permissionPolicy,
) => {
  const filteredPermission = permissions
    && permissions.filter(
      permissionItem => permissionItem.policy === permissionPolicy,
    )
  return filteredPermission && filteredPermission.length > 0
}
