/* eslint no-new: 0 */

import test from 'ava';
import $ from 'cash-dom';

import UserDetails from './UserDetails.html';

const roleOptions = [
    { name: 'role / admin', slug: 'admin', icon: 'fire' },
    { name: 'role / editor', slug: 'editor', icon: 'user' },
    { name: 'role / pending', slug: 'pending', icon: 'user' }
];

const user = {
    chartCount: 0,
    createdAt: '2019-03-18T17:19:59.000Z',
    email: 'abby@example.com',
    id: 4711,
    language: 'en_US',
    name: 'Abby Example',
    role: 3,
    url: 'http://api.datawrapper.local:18080/v3/users/2'
};

test.beforeEach(t => {
    t.context = $('<div />');
    $(document.body)
        .empty()
        .append(t.context);
});

test.cb('Fire a "close" event when close button is clicked', t => {
    t.plan(1);

    const details = new UserDetails({
        target: t.context[0],
        data: { user, roleOptions }
    });

    details.on('close', () => {
        t.pass();
        t.end();
    });

    t.context.find('[data-test=close]').trigger('click');
});