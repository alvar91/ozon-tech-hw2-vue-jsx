<script lang="jsx">
import Header from "@/components/header";
import MainContainer from "@/components/main-container.vue";
import Aside from "@/components/aside.vue";
import Card from "@/components/card.vue";

import { api } from "../api";

export default {
  name: "MainView",

  data() {
    return {
      filterKeyword: "",
      users: [],
      currentUserId: "",
    };
  },

  created() {
    this.loadData();
  },

  computed: {
    filteredUsers() {
      return this.filterKeyword
        ? this.users.filter(({ firstName, middleName, lastName }) => {
            return (
              firstName.toLowerCase().includes(this.filterKeyword) ||
              middleName.toLowerCase().includes(this.filterKeyword) ||
              lastName.toLowerCase().includes(this.filterKeyword)
            );
          })
        : this.users;
    },

    currentUser() {
      if (this.currentUserId === "") return this.users[0];

      return this.users.find((user) => user.id === this.currentUserId);
    },
  },
  methods: {
    async loadData() {
      const data = await api.getUsers();
      this.users = data;
    },

    setFilterKeyword(evt) {
      const value = evt.target.value;
      this.filterKeyword = value.toLowerCase();
    },

    setCurrentUser(evt) {
      evt.preventDefault();
      const $value = evt.target.closest("[data-id]");
      if ($value === null) return;

      const userId = $value.dataset.id;
      this.currentUserId = userId;
    },
  },

  render() {
    if (this.users.length === 0) {
      return (
        <div>
          <Header />
          <MainContainer>
            <div>Загрузка данных, подождите...</div>
          </MainContainer>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <MainContainer>
          <Aside
            users={this.filteredUsers}
            on={{
              setFilterKeyword: (evt) => this.setFilterKeyword(evt),
              setCurrentUser: (evt) => this.setCurrentUser(evt),
            }}
          />
          <Card currentUser={this.currentUser} />
        </MainContainer>
      </div>
    );
  },
};
</script>
