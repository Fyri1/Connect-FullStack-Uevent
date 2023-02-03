import React from 'react';

import UserEditForm from '../src/components/admin-panel/edit/UserEditForm.jsx';
import RoleEditForm from '../src/components/admin-panel/edit/RoleEditForm.jsx';
import EventEditForm from '../src/components/admin-panel/edit/EventEditForm.jsx';
import CategoryEditForm from '../src/components/admin-panel/edit/CategoryEditForm.jsx';
import TicketEditForm from '../src/components/admin-panel/edit/TicketEditForm.jsx';
import OrganizationEditForm from '../src/components/admin-panel/edit/OrganizationEditForm.jsx';

const editForms = (data) => {
  // console.log(data);
  return ({
    users: <UserEditForm originData={data} formMessage={"Edit user"} />,
    roles: <RoleEditForm originData={data} formMessage={"Edit role"} />,
    events: <EventEditForm originData={data} formMessage={"Edit event"} />,
    categories: <CategoryEditForm originData={data} formMessage={"Edit category"} />,
    tickets: <TicketEditForm originData={data} formMessage={"Edit ticket"} />,
    organization: <OrganizationEditForm originData={data} formMessage={"Edit organization"} />,
  });
}

export default editForms;
