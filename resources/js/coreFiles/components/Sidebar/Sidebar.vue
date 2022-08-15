<template>
    <div class="main-menu menu-fixed menu-light menu-accordion" data-scroll-to-active="true">
        <div class="main-menu-content">
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                <li class="nav-item" @click="showChildren(index)" :key="index" v-for="(item,index) in sidebarItemsValue"
                :class="{
                    'has-sub' : (typeof item.children != 'undefined' && item.children.length > 0),
                    'open' : clickedIndex == index
                }">
                    <template>
                        <a v-if="typeof item.children != 'undefined' && item.children.length > 0" href="javascript:void(0)">
                            <template>
                                <i v-if="typeof item.imageIcon == 'undefined'" :class="item.iconClasses" aria-hidden="true"></i>
                                <img v-else draggable="false" :src="item.imageIcon">
                            </template>
                            {{item.name}}
                        </a>
                        <router-link v-else :to="{name : item.componentName,params : item.defaultParams }" exact>
                            <template>
                                <i v-if="typeof item.imageIcon == 'undefined'" :class="item.iconClasses" aria-hidden="true"></i>
                                <img v-else draggable="false" :src="item.imageIcon">
                            </template>
                            <span class="menu-title" data-i18n="">{{item.name}}</span>
                        </router-link>
                    </template>
                    <ul v-if="typeof item.children != 'undefined' && item.children.length > 0" class="menu-content">
                        <li v-for="(child,childIndex) in item.children">
                            <!-- <a class="menu-item" href="a-inventory-management.html">Inventory Management</a>  -->
                            <router-link :to="{name : child.componentName,params : child.defaultParams }" class="menu-item" exact>
                                <template>
                                    <i v-if="typeof item.imageIcon == 'undefined'" :class="item.iconClasses" aria-hidden="true"></i>
                                    <img v-else draggable="false" :src="item.imageIcon">
                                </template>
                                <span class="menu-title" data-i18n="">{{child.name}}</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props :{
    sidebarItems: {
        type: Array,
        required: true,
        default: null
    }
},
    data() {
        return {
            clickedIndex : -1,
            sidebarItemsValue: this.sidebarItems
        };
    },
    methods: {
      showChildren(index) {
        if(this.clickedIndex == index){
            this.clickedIndex = -1;
        }else{
            this.clickedIndex = index;

        }
      }
    }
}

</script>
